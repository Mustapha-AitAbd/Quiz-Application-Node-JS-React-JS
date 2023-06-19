const User = require("../models/UserModel");
async function addUser(req, res) {
  // Add user code
  
  const post =  new User(req.body);
  await post.save();
  res.json(post);
}
async function updateUser(req, res) {
  // Update user code
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({ message: "user updated" });
}
async function deleteUser(req, res) {
  // Delete user code
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "user deleted" });
}
async function loginUser(req, res) {
  // Login user code
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      req.session.user = user; 
      res.status(200).json({ message: "Success", user });
    } else {
      res.status(400).json({ message: "Error", error: "Invalid credentials" });
    }
  } else {
    res.status(400).json({ message: "Error", error: "Invalid credentials" });
  }
}
module.exports = { addUser, updateUser, deleteUser,loginUser };
