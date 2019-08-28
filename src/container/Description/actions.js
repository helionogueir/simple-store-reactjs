const loadDescription = async pagename => {
  let result = { title: "None", subTitle: "Not Found" }
  try {
    const response = await fetch(`/storage/page/${pagename}.json`)
    const data = await response.json()
    result = { title: data.title, subTitle: data.subTitle }
  } catch (err) {
    console.error(err)
  }
  return result
}

export const Actions = { loadDescription }