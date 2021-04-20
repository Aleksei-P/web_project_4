export default class UserInfo {
  constructor(nameSelector, infoSelector, id) {
    this._name = nameSelector;
    this._info = infoSelector;
    this._id = id
  }


getUserInfo() {
  return { name: this._name.textContent, info: this._info.textContent, id: this._id };
}

  setUserInfo(name, info, id) {
  this._name.textContent = name;
  this._info.textContent = info;
  this._id = id;
};
}
