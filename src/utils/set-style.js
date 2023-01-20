async function setStyle(colorParam, borderParam) {
  await browser.execute((colorParam, borderParam) => {
    element = document.querySelector(".clinic-name");
    element.style.color = colorParam;
    element.style.border = borderParam;
    }, colorParam, borderParam);

  let el = await $(`//h1[@style="color: ${colorParam}; border: ${borderParam};"]`)
  await expect(el).toExist()
}

module.exports = { setStyle };
