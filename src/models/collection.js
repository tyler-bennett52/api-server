'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }
  async create() {
    try {
     const newItem = await this.model.create();
    } catch (error) {
      console.error('Error in collection method create');
      return error;
    }
  }

  async read(id = null) {
    try {
      if(!id) {
        const items = await this.model.findAll();
        return (items);
      } else {
        const item = await this.model.findByPk(id);
        return (item);
      }
    } catch (error) {
      console.error('Error in collection method read');
      return error;
    }
  }

  async update() {
    
  }
}