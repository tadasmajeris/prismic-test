export default (doc) => {
  if (doc.type === 'POST') {
    return `/${doc.uid}`
  }
}