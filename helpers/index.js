function linkResolver(doc) {
  if (doc.type === 'project') {
    return `/project/${doc.uid}`;
  }
  if (doc.type === 'main_content') {
    return `/main_content/${doc.ui}`;
  }
  if (doc.type === 'resume') {
    return `/resume/${doc.ui}`;
  }
  return '/';
}

module.exports = {
  linkResolver,
};
