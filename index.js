//goal: secure login feature that
  //allows login attempt up to 3 times
  //locks the account after three failed attempts

  //global variables
const userInfo = {username: "user1", password: "password123"};
  //Outer Function: createLoginTracker
  function createLoginTracker(userInfo) {
    let attemptCount = 0
    const attemptTracker = (passwordAttempt) => {
      if (attemptCount >3) {
        return "Account locked due to too many failed login attempts";
      }
      attemptCount = attemptCount + 1;
      if (passwordAttempt === userInfo.password) {
          return "Login successful";
        } else if (attemptCount <= 3) {
          return `Attempt ${attemptCount}: Login failed`
         } else if (attemptCount >= 3) {
           return "Account locked due to too many failed login attempts"
         }
      }
  return attemptTracker;
}
//Testing -- note I originally had the function checking both username and password, but since the tests only check for password, I had to remove the username input in order to get them to pass
// const login = createLoginTracker(userInfo);
// login("wronguser", "wrongpassword"); // Login Failed, attempt 1
// login("user1", "wrongpassword");     // Login Failed, attempt 2
// login("wronguser", "wrongpassword"); // Login Failed, attempt 3
// login("user1", "wrongpassword");     // Login Failed, locked
// login("user1", "password123");       // locked

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};