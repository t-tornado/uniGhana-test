import mongoose from "mongoose";

export class BaseRepositoryClass<T> {
  protected model: mongoose.Model<T>;

  constructor(model: mongoose.Model<T>) {
    this.model = model;
  }

  addDocument = async (data: T) => {
    return new Promise(async (res, rej) => {
      await this.model.create(data, function (err, small) {
        if (err) rej(err);
        else res(true);
      });
    });
  };

  getDocument = async (filter: mongoose.FilterQuery<T>): Promise<T> => {
    return new Promise((res, rej) => {
      this.model.findOne(filter, async function (err, document: T) {
        if (err) rej(err);
        else res(document);
      });
    });
  };
}
