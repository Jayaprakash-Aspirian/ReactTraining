export const Registration = (userdata: any, allusersare: any) => {
  var userErrors = "";
  const mobileis = allusersare.filter(
    (data: any) => data.mobile === userdata.mobile
  );
  const emailis = allusersare.filter(
    (data: any) => data.email === userdata.email
  );
  mobileis[0]
    ? (userErrors = "Mobile Number Already taken")
    : emailis[0]
    ? (userErrors = "Email ID Already taken") 
    : console.log("")

  return userErrors;
};
