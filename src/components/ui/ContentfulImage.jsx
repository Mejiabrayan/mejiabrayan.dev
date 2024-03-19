import ContentfulImage from './ui/ContentfulImage'

const contentfulLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  
  const ContentfulImage = props => {
    return <img loader={contentfulLoader} {...props} />
  }
  
  export default ContentfulImage