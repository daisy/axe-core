import { getRole, getRoleType, getSuperClassRole } from '../commons/aria';
import { isVisibleToScreenReaders } from '../commons/dom';

export default function landmarkUniqueMatches(node, virtualNode) {
  const isVizy = isVisibleToScreenReaders(virtualNode);
  if (!isVizy) {
    return false;
  }

  const roleType = getRoleType(virtualNode, { dpub: true });
  if (roleType === 'landmark') {
    return true;
  }

  const role = getRole(virtualNode, { dpub: true });
  const superClassRoles = getSuperClassRole(role);
  if (superClassRoles) {
    for (const superClassRole of superClassRoles) {
      const superClassRoleType = getRoleType(superClassRole, { dpub: true });
      if (superClassRoleType === 'landmark') {
        return true;
      }
    }
  }

  return false;
}
