import { getRole, getRoleType, getSuperClassRole } from '../commons/aria';
import { isVisibleToScreenReaders } from '../commons/dom';

export default function landmarkUniqueMatches(node, virtualNode) {
  const isVizy = isVisibleToScreenReaders(virtualNode);
  if (!isVizy) {
    return false;
  }

  const roleType = getRoleType(virtualNode);
  if (roleType === 'landmark') {
    return true;
  }

  const role = getRole(virtualNode);
  const superClassRoles = getSuperClassRole(role);
  if (superClassRoles) {
    for (const superClassRole of superClassRoles) {
      const superClassRoleType = getRoleType(superClassRole);
      if (superClassRoleType === 'landmark') {
        return true;
      }
    }
  }

  return false;
}
