const API = require('../api');

/**
 * Contacts APIs
 *
 * @class ContactsAPI
 * @extends {API.OAuthBased}
 */
class ContactsAPI extends API.OAuthBased {
  /**
   * Creates an instance of ContactsAPI.
   *
   *
   * @memberOf ContactsAPI
   */
  constructor() {
    super();
  }

  /**
   * Gets contacts
   * REQUIRED SCOPE: contacts.read
   *
   * @param {String} accessToken
   * @param {Object} body
   * @returns {Promise}
   *
   * @memberOf ContactsAPI
   */
  get(accessToken, body) {
    return this.request(accessToken, {
      method: 'POST',
      path: '/api/v1/contacts.get',
      body,
      json: true
    });
  }

  /**
   * Scrolls a list of contacts
   * REQUIRED SCOPE: contacts.read
   *
   * @param {String} accessToken
   * @param {Object} body
   * @returns {Promise}
   *
   * @memberOf ContactsAPI
   */
  scroll(accessToken, body) {
    return this.request(accessToken, {
      method: 'POST',
      path: '/api/v1/contacts.scroll',
      body,
      json: true
    });
  }

  /**
   * Searches for contacts
   * REQUIRED SCOPE: contacts.read
   *
   * @param {String} accessToken
   * @param {Object} body
   * @returns {Promise}
   *
   * @memberOf ContactsAPI
   */
  search(accessToken, body) {
    return this.request(accessToken, {
      method: 'POST',
      path: '/api/v1/contacts.search',
      body,
      json: true
    });
  }

  /**
   * Creates a new contact
   * REQUIRED SCOPE: contacts.write
   *
   * @param {String} accessToken
   * @param {Object} body
   * @returns {Promise}
   *
   * @memberOf ContactsAPI
   */
  create(accessToken, body) {
    return this.request(accessToken, {
      method: 'POST',
      path: '/api/v1/contacts.create',
      body,
      json: true
    });
  }

  /**
   * Updates a contact
   * REQUIRED SCOPE: contacts.write
   *
   * @param {String} accessToken
   * @param {Object} body
   * @returns {Promise}
   *
   * @memberOf ContactsAPI
   */
  update(accessToken, body) {
    return this.request(accessToken, {
      method: 'POST',
      path: '/api/v1/contacts.update',
      body,
      json: true
    });
  }

  /**
   * Manages tags for a contact (https://api.fullcontact.com/api/v1/docs/methods/contacts.manageTags)
   * REQUIRED SCOPE: contacts.write
   *
   * @param {String} accessToken
   * @param {Object} body
   * @returns {Promise}
   *
   * @memberOf ContactsAPI
   */
  manageTags(accessToken, body) {
    return this.request(accessToken, {
      method: 'POST',
      path: '/api/v1/contacts.manageTags',
      body,
      json: true
    });
  }

  /**
   * Uploads a contact photo (https://api.fullcontact.com/api/v1/docs/methods/contacts.uploadPhoto)
   * REQUIRED SCOPE: contacts.write
   *
   * @param {String} accessToken
   * @param {Object} contact
   * @param {Buffer} buffer
   * @returns {Promise}
   *
   * @memberOf ContactsAPI
   */
  uploadPhoto(accessToken, contact, buffer) {
    return this.request(accessToken, {
      method: 'POST',
      path: '/api/v1/contacts.uploadPhoto',
      formData: {
        'contact.json': {
          value: JSON.stringify(contact),
          options: {
            contentDisposition: 'form-data',
            contentType: 'application/json'
          }
        },
        file3: {
          value: buffer,
          options: {
            filename: 'image.png',
            contentType: 'image/png',
            contentDisposition: 'form-data'
          }
        }
      },
      json: true
    });
  }

  /**
   * Deletes a contact (https://api.fullcontact.com/api/v1/docs/methods/contacts.delete)
   * REQUIRED SCOPE: contacts.write
   *
   * @param {String} accessToken
   * @param {Object} body
   * @returns {Promise}
   *
   * @memberOf ContactsAPI
   */
  del(accessToken, body) {
    return this.request(accessToken, {
      method: 'POST',
      path: '/api/v1/contacts.delete',
      body,
      json: true
    });
  }
}

module.exports = ContactsAPI;
