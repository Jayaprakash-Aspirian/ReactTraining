export const DataLogin = (
  mobile: string,
  password: string,
  allusersare: any
) => {
  var userErrors = "";
  const mobileis = allusersare.filter((data: any) => data.mobile === mobile);
  const useris = allusersare.filter(
    (data: any) => data.mobile === mobile && data.password === password
  );
  useris[0]
    ? sessionStorage.setItem("user", JSON.stringify(useris[0]))
    : mobileis[0]
    ? (userErrors = "Invalid Password")
    : (userErrors = "Invalid Mobile Number");
  return userErrors;
};
