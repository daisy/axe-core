import {
  getExplicitRole,
  getSuperClassRole,
  isValidRole,
  getRole
} from '../../commons/aria';

export default function listitemEvaluate(node, options, virtualNode) {
  const { parent } = virtualNode;
  if (!parent) {
    // Can only happen with detached DOM nodes and roots:
    return undefined;
  }

  const parentExplicitRole = getExplicitRole(parent);
  const parentRole = getRole(parent);

  if (['presentation', 'none', 'list'].includes(parentRole)) {
    return true;
  }

  if (parentRole && isValidRole(parentRole)) {
    const sup = getSuperClassRole(parentRole);
    if (sup && sup.includes('list')) {
      return true;
    }
  }

  if (parentExplicitRole && isValidRole(parentExplicitRole)) {
    const sup = getSuperClassRole(parentExplicitRole);
    if (sup && sup.includes('list')) {
      return true;
    }

    this.data({
      messageKey: 'roleNotValid'
    });
  }
  return false;
}
