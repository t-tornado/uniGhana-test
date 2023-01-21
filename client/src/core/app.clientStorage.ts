export enum ClientStorageItems {
  USER = "logged-in-user",
}

class ClientStorageClass {
  private storage: Storage;
  constructor() {
    this.storage = localStorage;
  }

  set = (id: ClientStorageItems, item: any) => {
    const data = JSON.stringify(item);
    this.storage.setItem(id, data);
  };

  get = (id: ClientStorageItems) => {
    const data = JSON.parse(this.storage.getItem(id) ?? "{}");
    return data;
  };

  remove = (id: ClientStorageItems) => {
    this.storage.removeItem(id);
  };

  reset = () => this.storage.clear();
}

export const ClientStorage = new ClientStorageClass();
