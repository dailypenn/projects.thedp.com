import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

// const NotFoundPage = () => (
//   <>
//     <SEO title="404: Not found" />
//     <h1>NOT FOUND</h1>
//     <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//   </>
// )

const NotFoundPage = () => {
  useEffect(() => {
    const idx = window.location.href.split('/', 3).join('/').length
    const slug = window.location.href.substring(idx)
    navigate(`https://dailypenn.github.io/old.projects.thedp.com${slug}`)
  }, [])

  return null
}

export default NotFoundPage
