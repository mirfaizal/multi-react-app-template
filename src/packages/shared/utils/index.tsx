import { getEnvVariable } from '../../shared/types/envUtils';

export function isAdmin(user: any, authenticated: boolean) {
  return authenticated && user[getEnvVariable('roleURL')].indexOf('admin') === 0 ? true : false;
}

export function isStudent(user: any, authenticated: boolean) {
  return authenticated && user[getEnvVariable('roleURL')].indexOf('student') === 0 ? true : false;
}

export function getNavMenu(user: any, authenticated: boolean) {
  var adminNavMenus = [
    { description: 'Admin Home', url: '/admin', label: 'Home', level: 0, uniqueId: 1 },
    { description: 'Only for Administrator use', url: '/admin/student', label: 'Student', level: 1, uniqueId: 2 },
    { description: 'Only for Administrator use', url: '/admin/teacher', label: 'Teacher', level: 1, uniqueId: 3 },
    {
      description: 'Only for Administrator use',
      url: '/admin/announcement',
      label: 'Announcement',
      level: 1,
      uniqueId: 4,
    },
    { description: 'Only for Administrator use', url: '/admin/course', label: 'Course', level: 1, uniqueId: 5 },
    { description: 'Administrator Profile', url: '/admin/profile', label: 'Profile', level: 1, uniqueId: 6 },
  ];
  var studentNavMenus = [
    { description: 'Home', url: '/student', label: 'Home', level: 0, uniqueId: 1 },
    {
      description: 'Student connects teacher',
      url: '/student/connectwithteacher',
      label: 'Teacher',
      level: 1,
      uniqueId: 2,
    },
    {
      description: 'Only for Administrator use',
      url: '/student/course',
      label: 'Cource',
      level: 1,
      uniqueId: 3,
    },
    { description: 'Student Profile', url: '/student/profile', label: 'Profile', level: 1, uniqueId: 4 },
  ];
  let navMenu: any = [];
    if (isAdmin(user, authenticated)) {
      console.log('Admin');
      navMenu = adminNavMenus;
    } else if (isStudent(user, authenticated)) {
      console.log('Student');
      navMenu = studentNavMenus;
    }
  return navMenu;
}
