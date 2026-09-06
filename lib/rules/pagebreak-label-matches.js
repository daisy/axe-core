function pagebreakLabelMatches(node) {
  // selector: '[*|type~="pagebreak"], [role~="doc-pagebreak"]',
  const hasRole = node.hasAttribute('role') && node.getAttribute('role').match(/\S+/g).includes('doc-pagebreak');
  const hasEpubType1 = node.hasAttributeNS('http://www.idpf.org/2007/ops', 'type') && node.getAttributeNS('http://www.idpf.org/2007/ops', 'type').match(/\S+/g).includes('pagebreak');
  const hasEpubType2 = node.hasAttribute('epub:type') && node.getAttribute('epub:type').match(/\S+/g).includes('pagebreak'); // for unit tests that are not XML-aware due to fixture.innerHTML

  return hasRole || hasEpubType1 || hasEpubType2;
}

export default pagebreakLabelMatches;
