import { User } from './user';

describe('User class', () => {
    let user: User;
    
    beforeEach(() => {
        user = new User('David', 24, 'Developer', '5 years', 'true');
    });
    
    test('should create a user with the correct name', () => {
        expect(user.name).toBe('David');
     });

    test('should return the correct profile', () => {
        expect(user.getProfile()).toBe('Name: David, Age: 24, Profesion: Developer, Trayectory: 5 years, IsActive: true');
    });

    test('should return true for active user', () => {
        expect(user.isUSerActive()).toBe('true');       
    });
    
    test('should return false for inactive user', () => {
        user.isActive = 'false';
        expect(user.isUSerActive()).toBe('false');
    });


});