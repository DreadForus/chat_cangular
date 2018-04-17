import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ChatFakeDb } from './chat';
import { ContactsFakeDb } from './contacts';
import { TodoFakeDb } from './todo';
import { ScrumboardFakeDb } from './scrumboard';
import { InvoiceFakeDb } from './invoice';
import { ProfileFakeDb } from './profile';
import { SearchFakeDb } from './search';
import { IconsFakeDb } from './icons';
import { QuickPanelFakeDb } from './quick-panel';

export class FuseFakeDbService implements InMemoryDbService
{
    createDb()
    {
        return {

            // Chat
            'chat-contacts': ChatFakeDb.contacts,
            'chat-chats'   : ChatFakeDb.chats,
            'chat-user'    : ChatFakeDb.user,

            // Contacts
            'contacts-contacts': ContactsFakeDb.contacts,
            'contacts-user'    : ContactsFakeDb.user,

            // Todo
            'todo-todos'  : TodoFakeDb.todos,
            'todo-filters': TodoFakeDb.filters,
            'todo-tags'   : TodoFakeDb.tags,

            // Scrumboard
            'scrumboard-boards': ScrumboardFakeDb.boards,

            // Invoice
            'invoice': InvoiceFakeDb.invoice,

            // Profile
            'profile-timeline'     : ProfileFakeDb.timeline,
            'profile-photos-videos': ProfileFakeDb.photosVideos,
            'profile-about'        : ProfileFakeDb.about,

            // Search
            'search-classic': SearchFakeDb.classic,
            'search-table'  : SearchFakeDb.table,

            // Icons
            'icons': IconsFakeDb.icons,

            // Quick Panel
            'quick-panel-notes' : QuickPanelFakeDb.notes,
            'quick-panel-events': QuickPanelFakeDb.events
        };
    }
}
