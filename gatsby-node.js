exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;

  const typeDefs = [
    schema.buildUnionType({
      name: 'ModuleData',
      types: ['TimelineContent', 'TimelineQuote', 'TimelineCompanyGrid'],
      resolveType: obj => {
        if (obj.companies) {
          return 'TimelineCompanyGrid';
        }

        if (obj.role) {
          return 'TimelineQuote';
        }

        return 'TimelineContent';
      },
    }),
    schema.buildEnumType({
      name: 'ModuleType',
      values: {
        timelineContent: {
          value: 'timelineContent',
        },
        timelineQuote: {
          value: 'timelineQuote',
        },
        timelineCompanyGrid: {
          value: 'timelineCompanyGrid',
        },
      },
    }),
    schema.buildObjectType({
      name: 'Image',
      fields: {
        alt: 'String',
        src: 'File',
      },
    }),
    schema.buildObjectType({
      name: 'Module',
      fields: {
        module: 'ModuleType',
        data: 'ModuleData',
        noBorder: 'Boolean',
      },
    }),
    schema.buildObjectType({
      name: 'Company',
      fields: {
        logo: {
          type: 'Image',
        },
        name: 'String',
        slug: 'String',
        url: 'String',
      },
    }),
    schema.buildObjectType({
      name: 'Contract',
      fields: {
        logo: {
          type: 'Image',
        },
        name: 'String',
        slug: 'String',
        url: 'String',
        logoTitle: 'Boolean',
        modules: '[Module]',
      },
    }),
    schema.buildObjectType({
      name: 'TimelineContent',
      fields: {
        body: 'String',
      },
    }),
    schema.buildObjectType({
      name: 'TimelineQuote',
      fields: {
        company: 'String',
        name: 'String',
        profilePic: {
          type: 'Image',
        },
        role: 'String',
        body: 'String',
      },
    }),
    schema.buildObjectType({
      name: 'TimelineCompanyGrid',
      fields: {
        companies: '[Company]',
      },
    }),
    schema.buildObjectType({
      name: 'Contracting',
      fields: {
        contracts: '[Contract]',
        yearStarting: 'String',
      },
    }),
    schema.buildObjectType({
      name: 'Remote',
      fields: {
        title: 'String',
        period: 'String',
        modules: '[Module]',
      },
    }),
    schema.buildObjectType({
      name: 'Freelancing',
      fields: {
        contracting: '[Contracting]',
        remote: {
          type: 'Remote',
        },
        startDate: 'String',
        startTitle: 'String',
      },
    }),
    schema.buildObjectType({
      name: 'Perm',
      fields: {
        company: 'String',
        introduction: 'String',
        logo: {
          type: 'Image',
        },
        period: 'String',
        role: 'String',
        url: 'String',
      },
    }),
    schema.buildObjectType({
      name: 'Timeline',
      fields: {
        freelancing: 'Freelancing',
        perm: '[Perm]',
      },
    }),
    schema.buildObjectType({
      name: 'WorkJson',
      fields: {
        timeline: 'Timeline',
      },
      interfaces: ['Node'],
    }),
  ];

  createTypes(typeDefs);
};
