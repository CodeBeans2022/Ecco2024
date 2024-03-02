class Users{
    fetchUsers(req, res) {
        const qry = `
        SELECT userID, firstName, lastName, userAge, userGender, userEmail,
        userProfile, userRole
        FROM Users;
        `
    }
    fetchUser(req, res){}
    register(req, res) {}
    updateUser(req, res) {}
    deleteUser(req, res) {}
    login(req, res) {}
}