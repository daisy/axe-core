function pagebreakLabelMatches(node) {
  // selector: '[*|type~="pagebreak"], [role~="doc-pagebreak"]',
  return (
    (node.hasAttribute('role') &&
      node.getAttribute('role').match(/\S+/g).includes('doc-pagebreak')) ||
    (node.hasAttributeNS('http://www.idpf.org/2007/ops', 'type') &&
      node
        .getAttributeNS('http://www.idpf.org/2007/ops', 'type')
        .match(/\S+/g)
        .includes('pagebreak')) ||
    (node.hasAttribute('epub:type') &&
      node.getAttribute('epub:type').match(/\S+/g).includes('pagebreak')) // for unit tests that are not XML-aware due to fixture.innerHTML
  );
}

export default pagebreakLabelMatches;
