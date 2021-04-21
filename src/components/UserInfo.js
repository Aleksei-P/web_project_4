export default class UserInfo {
  constructor(nameSelector, infoSelector, id, avatar) {
    this._name = nameSelector;
    this._info = infoSelector;
    this._id = id
    this._avatar = avatar
  }


getUserInfo() {
  return { name: this._name.textContent, info: this._info.textContent, id: this._id, avatar: this._avatar};
}

  setUserInfo(name, info, id, avatar) {
  this._name.textContent = name;
  this._info.textContent = info;
  this._id = id;
  this._avatar = avatar
};
}
