function linkResolver(doc) {
  if (doc.type === 'project') {
    return `/project/${doc.uid}`;
  }
  return '/';
}

module.exports = {
  linkResolver,
};
