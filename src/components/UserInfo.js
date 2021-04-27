export default class UserInfo {
  constructor(nameSelector, infoSelector, avatar, id) {
    this._name = nameSelector;
    this._info = infoSelector;
    this._id = id
    this._avatar = avatar
  }


getUserInfo() {
  return { name: this._name.textContent, info: this._info.textContent, id: this._id, avatar: this._avatar};
}

  setUserInfo(name, info, avatar, id) {
  this._name.textContent = name;
  this._info.textContent = info;
  this._id = id;
  this._avatar = avatar;
};
  setUserAvatar(avatar) {
    this._avatar = avatar;
  }

}
