
'use strict';
const path = require('path');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: '列表名称',
        default: 'demo'
      },
      {
        type: 'confirm',
        name: 'urlCacheQuery',
        message: '是否需要url缓存搜索条件 ?'
      },
      {
        type: 'confirm',
        name: 'moveon',
        message: 'Continue ?'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  initialize() {
    if (!this.props.moveon) {
      this.log('\nexit...\n');
      process.exit(1);
    }
  }

  writing() {
    this.log('\nWriting...\n');

    this._writingList();
  }

  _writingList() {
    this.destinationRoot('src/views');
    mkdirp(this.props.name);
    this.fs.copyTpl(
      this.templatePath('_list.vue'),
      this.destinationPath(`${this.props.name}/list.vue`),
      {
        name: this.props.name,
        uniqueName: this.props.name,
        urlCacheQuery: this.props.urlCacheQuery
      }
    );
    this.fs.copyTpl(
      this.templatePath('_list.config.js'),
      this.destinationPath(`${this.props.name}/list.config.js`)
    );
  }
};
