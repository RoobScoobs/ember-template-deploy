import ActiveModelAdapter from 'active-model-adapter';
import ENV from 'ember-deploy-test/config/environment';

export default ActiveModelAdapter.extend({
  host: ENV.apiHost,
});
