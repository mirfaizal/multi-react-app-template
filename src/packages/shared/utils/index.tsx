const config = require('../../../auth_config.json');

export function getNavMenu(user: any, authenticated: boolean) {
  var adminNavMenus = [
    { description: 'Home', url: '/admin', label: 'Admin Home', level: 0, uniqueId: 0 },
    { description: 'Only for Administrator use', url: '/admin', label: 'Administration', level: 1, uniqueId: 1 },
    { description: 'Only for Administrator use', url: '/admin/student', label: 'Student', level: 2, uniqueId: 2 },
    { description: 'Only for Administrator use', url: '/admin/teacher', label: 'Teacher', level: 2, uniqueId: 3 },
    {
      description: 'Only for Administrator use',
      url: '/admin/announcement',
      label: 'Announcement',
      level: 2,
      uniqueId: 4,
    },
    { description: 'Only for Administrator use', url: '/admin/course', label: 'Course', level: 2, uniqueId: 5 },
    { description: 'Administrator Profile', url: '/admin/profile', label: 'Profile', level: 2, uniqueId: 6 },
  ];
  let navMenu: any = [];
  if (authenticated) {
    const roles = user[config.roleURL];
    const isAdmin: boolean = roles.indexOf('admin') === 0;
    // let isStudent: boolean = roles.indexOf('student') === 0;
    // let isTeacher: boolean = roles.indexOf('teacher') === 0;
    // let isParent: boolean = roles.indexOf('parent') === 0;
    if (isAdmin) {
      navMenu = adminNavMenus;
    }
  }
  return navMenu;
}
