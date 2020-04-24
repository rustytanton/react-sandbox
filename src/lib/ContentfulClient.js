import { createClient } from 'contentful';
import contentfulTokens from '../contentful-tokens.json';

export default class ContentfulClient {
    client () {
        return createClient(contentfulTokens)
    }

    getEntry (args) {
        return this.client().getEntry(args)
    }

    getEntries (args) {
        return this.client().getEntries(args)
    }
}