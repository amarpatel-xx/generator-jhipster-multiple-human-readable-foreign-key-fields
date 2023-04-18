import chalk from 'chalk';
import ClientGenerator from 'generator-jhipster/esm/generators/client';
import { 
  PRIORITY_PREFIX,
  INITIALIZING_PRIORITY,
  PROMPTING_PRIORITY,
  CONFIGURING_PRIORITY,
  COMPOSING_PRIORITY,
  LOADING_PRIORITY,
  PREPARING_PRIORITY,
  DEFAULT_PRIORITY,
  WRITING_PRIORITY,
  POST_WRITING_PRIORITY,
  INSTALL_PRIORITY,
  END_PRIORITY,
} from 'generator-jhipster/esm/priorities';

export default class extends ClientGenerator {
  constructor(args, opts, features) {
    super(args, opts, { taskPrefix: PRIORITY_PREFIX, ...features });

    if (this.options.help) return;

    if (!this.options.jhipsterContext) {
      throw new Error(
        `This is a JHipster blueprint and should be used only like ${chalk.yellow('jhipster --blueprints cassandra-composite-primary-key')}`
      );
    }


    this.sbsBlueprint = true;
  }

  get [INITIALIZING_PRIORITY]() {
    return {
      async initializingTemplateTask() {},
      ...super._initializing(),
    };
  }

  get [PROMPTING_PRIORITY]() {
    return {
      async promptingTemplateTask() {},
      ...super._prompting(),
    }
  }

  get [CONFIGURING_PRIORITY]() {
    return {
      async configuringTemplateTask() {},
      ...super._configuring(),
    };
  }

  get [COMPOSING_PRIORITY]() {
    return {
      async composingTemplateTask() {},
      ...super._composing(),
    };
  }

  get [LOADING_PRIORITY]() {
    return {
      async loadingTemplateTask() {},
      ...super._loading(),
    };
  }

  get [PREPARING_PRIORITY]() {
    return {
      async preparingTemplateTask() {},
      ...super._preparing(),
    };
  }

  get [DEFAULT_PRIORITY]() {
    return {
      async defaultTemplateTask() {},
      ...super._default(),
    };
  }

  get [WRITING_PRIORITY]() {
    return {
      ...super._writing(),
      async writeConfigFile() {
        await this.writeFiles({
          templates: [
            {
              sourceFile: 'angular/package.json',
              destinationFile: 'package.json',
              noEjs: false,
            },
          ],
        });
      },
      //...super._writing(),
    };
  }

  get [POST_WRITING_PRIORITY]() {
    return {
      async postWritingTemplateTask() {},
      ...super._postWriting(),
    };
  }

  get [INSTALL_PRIORITY]() {
    return {
      async installTemplateTask() {},
      ...super._install(),
    };
  }

  get [END_PRIORITY]() {
    return {
      async endTemplateTask() {},
      ...super._end(),
    };
  }
}
