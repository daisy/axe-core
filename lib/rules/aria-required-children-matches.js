import { requiredOwned, getExplicitRole } from '../commons/aria';

function ariaRequiredChildrenMatches(node, virtualNode) {
  const role = getExplicitRole(virtualNode);
  return !!requiredOwned(role);
}

export default ariaRequiredChildrenMatches;
