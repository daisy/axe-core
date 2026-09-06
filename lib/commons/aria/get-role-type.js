import standards from '../../standards';
import AbstractVirtualNode from '../../core/base/virtual-node/abstract-virtual-node';

/**
 * Get the "type" of role; either widget, composite, abstract, landmark or `null`
 * @method getRoleType
 * @memberof axe.commons.aria
 * @instance
 * @param {String|Null|Node|Element} role The role to check, or element to check the role of
 * @param {Object} options
 * @param {boolean} options.noImplicit  Do not return the implicit role // @deprecated
 * @param {boolean} options.fallback  Allow fallback roles
 * @param {boolean} options.abstracts  Allow role to be abstract
 * @param {boolean} options.dpub  Allow role to be any (valid) doc-* roles
 * @param {boolean} options.noPresentational return null if role is presentation or none
 * @param {boolean} options.chromium Include implicit roles from chromium-based browsers in role result
 * @return {Mixed} String if a matching role and its type are found, otherwise `null`
 */
function getRoleType(role, options) {
  if (
    role instanceof AbstractVirtualNode ||
    (window?.Node && role instanceof window.Node)
  ) {
    role = axe.commons.aria.getRole(role, options);
  }
  const roleDef = standards.ariaRoles[role];
  return roleDef?.type || null;
}

export default getRoleType;
