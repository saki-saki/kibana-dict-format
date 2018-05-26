import { resolve } from 'path';
import exampleRoute from './server/routes/example';

export default function(kibana) {
    return new kibana.Plugin({
        require: ['elasticsearch'],
        name: 'dict-format',
        uiExports: {

            //           app: {
            //               title: 'Dict Field Format',
            //               description: 'Kibana plugin',
            //               main: 'plugins/dict-field/app'
            //           },


            translations: [
                resolve(__dirname, './translations/es.json')
            ],

            fieldFormats: ['plugins/dict-format/register']

        },

        config(Joi) {
            return Joi.object({
                enabled: Joi.boolean().default(true),
            }).default();
        },


        init(server, options) {
            // Add server routes and initialize the plugin here
            exampleRoute(server);
        }


    });
};