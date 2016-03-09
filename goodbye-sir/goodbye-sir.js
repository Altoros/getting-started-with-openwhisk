function main(params) {
  var name = params.name || "sir";

  return {
    payload: "I am pretty busy and can't talk right now. Goodbye, " + name + "!"
  };
}
