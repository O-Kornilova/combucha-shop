import bcrypt from "bcryptjs";

const password = "12345678";

const hashPassword = async () => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  console.log(hashed);
};

hashPassword();
