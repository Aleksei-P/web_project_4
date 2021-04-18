export default class UserInfo {
  constructor(nameSelector, infoSelector) {
    this._name = nameSelector;
    this._info = infoSelector;


  }


getUserInfo() {
  return { name: this._name.textContent, info: this._info.textContent};
}

  setUserInfo(name, info, userId) {
  this._name.textContent = name;
  this._info.textContent = info;
  this._userId = userId;
};
}
