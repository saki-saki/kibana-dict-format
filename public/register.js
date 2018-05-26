import { RegistryFieldFormatEditorsProvider } from 'ui/registry/field_format_editors';
import { RegistryFieldFormatsProvider } from 'ui/registry/field_formats';

import { createDictFormat } from 'plugins/dict-format/dict-format'
import { dictEditor } from 'plugins/dict-format/editor/dict-editor'

RegistryFieldFormatsProvider.register(createDictFormat);
RegistryFieldFormatEditorsProvider.register(dictEditor);