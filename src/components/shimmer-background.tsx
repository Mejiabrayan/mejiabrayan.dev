import { useEffect } from 'react';

const ShimmerBackground = (): JSX.Element => {
  useEffect(() => {
    const canvas = document.getElementById(
      'backgroundCanvas'
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    // Improved mobile detection
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const canVibrate = isMobile && window.navigator && window.navigator.vibrate;
    let lastVibrationTime = 0;
    const VIBRATION_COOLDOWN = 1000; // Reduced to 1 second for more frequent feedback

    // Request permission for vibration on mobile
    const requestVibrationPermission = async () => {
      if (isMobile && typeof DeviceMotionEvent !== 'undefined') {
        try {
          // @ts-ignore - Some browsers need this
          if (DeviceMotionEvent.requestPermission) {
            // @ts-ignore
            const permission = await DeviceMotionEvent.requestPermission();
            return permission === 'granted';
          }
        } catch (e) {
          console.log('Vibration permission request failed:', e);
        }
      }
      return false;
    };

    // Try to get vibration permission when component mounts
    requestVibrationPermission();

    const setSize = (): void => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    setSize();
    window.addEventListener('resize', setSize);

    const dotSpacing = 15;
    const chars = '.*$+#:▲';
    let shimmerProgress = 0;

    ctx.font = `${dotSpacing / 1.5}px "Courier New", monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const shimmerPower = 6;
    const shimmerIntensity = 0.7;
    
    const dots: {
      x: number;
      y: number;
      baseOpacity: number;
      char: string;
      fillStyle: string;
    }[][] = [];
    for (let x = 0; x < canvas.width; x += dotSpacing) {
      const column = [];
      for (let y = 0; y < canvas.height; y += dotSpacing) {
        const baseOpacity = 0.015;
        column.push({
          x,
          y,
          baseOpacity,
          char: chars[Math.floor(Math.random() * chars.length)],
          fillStyle: `rgba(255, 255, 255, ${baseOpacity})`
        });
      }
      dots.push(column);
    }

    const tryVibrate = () => {
      if (!canVibrate) return;
      
      const now = Date.now();
      if (now - lastVibrationTime >= VIBRATION_COOLDOWN) {
        // Pattern: vibrate 50ms, pause 30ms, vibrate 50ms
        window.navigator.vibrate([50, 30, 50]);
        lastVibrationTime = now;
      }
    };

    const drawBackground = (): void => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const displayWidth = canvas.width / (window.devicePixelRatio || 1);
      const displayHeight = canvas.height / (window.devicePixelRatio || 1);
      const shimmerX = -displayWidth / 2 + shimmerProgress * (displayWidth * 2);
      const shimmerY = displayHeight / 2.5;
      const shimmerRadius = displayWidth;
      const shimmerRadiusSquared = shimmerRadius * shimmerRadius;

      // Wider trigger zone for mobile
      const triggerZone = isMobile ? 100 : 50;
      if (Math.abs(shimmerX - displayWidth / 2) < triggerZone) {
        tryVibrate();
      }

      dots.forEach((column) => {
        column.forEach((dot) => {
          const dx = (dot.x - shimmerX) * 2.236;
          const dy = dot.y - shimmerY;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < shimmerRadiusSquared) {
            const shimmerFactor = 1 - Math.sqrt(distanceSquared) / shimmerRadius;
            const shimmerEffect = Math.pow(shimmerFactor, shimmerPower) * shimmerIntensity;
            ctx.fillStyle = `rgba(255, 255, 255, ${dot.baseOpacity + shimmerEffect})`;
          } else {
            ctx.fillStyle = dot.fillStyle;
          }
          
          ctx.fillText(dot.char, dot.x, dot.y);
        });
      });

      shimmerProgress += 0.003;
      shimmerProgress %= 1;

      requestAnimationFrame(drawBackground);
    };

    drawBackground();

    return () => window.removeEventListener('resize', setSize);
  }, []);

  return (
    <div className='fixed inset-0 -z-10'>
      <canvas id='backgroundCanvas' />
    </div>
  );
};

export default ShimmerBackground;
