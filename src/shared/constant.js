export const ADMIN_BACKEND_ROOT = {
    main: 'http://localhost:3000/',
    other: 'http://localhost:3001/'
}

export const ACCESS_AUTH = {
    NONE_ACCESS: 1,
    GUEST_ACCESS: 2,
    EDITOR_ACCESS: 3,
    ADMIN_ACCESS: 4
}

/** 前后端权限名的映射 */
export const ROLES_MAP = {
    'admin':'admin',
    'super_editor':'editor',
    'guest':'guest'
}