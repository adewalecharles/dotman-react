import NotificationService, {
  NOTIF_WISHLIST_CHANGED,
} from "./notification-service.js";

let ns = new NotificationService();
let instance = null;
var Wishlist = [];
class DataService {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  addWishlistItem = (item) => {
    Wishlist.push(item);
    ns.postNotification(NOTIF_WISHLIST_CHANGED, Wishlist);
  };

  removeWishlistItem = (item) => {
    for (var x = 0; x < Wishlist.length; x++) {
      if (Wishlist[x]._id === item._id) {
        Wishlist.splice(x, 1);
        ns.postNotification(NOTIF_WISHLIST_CHANGED, Wishlist);
        break;
      }
    }
  };
}

export default DataService;
