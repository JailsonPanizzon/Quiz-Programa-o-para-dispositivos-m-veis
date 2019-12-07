

async function changeScreenOrientation() {
    await ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
  }


  export {changeScreenOrientation}