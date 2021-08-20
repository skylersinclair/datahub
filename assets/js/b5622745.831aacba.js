(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8594],{4137:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),u=o,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5536:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var n=a(2122),o=a(9756),i=(a(7294),a(4137)),r=["components"],s={title:"MetadataChangeProposal & MetadataChangeLog Events",sidebar_label:"MetadataChangeProposal & MetadataChangeLog Events",slug:"/advanced/mcp-mcl",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/advanced/mcp-mcl.md"},l="MetadataChangeProposal & MetadataChangeLog Events",p={unversionedId:"docs/advanced/mcp-mcl",id:"docs/advanced/mcp-mcl",isDocsHomePage:!1,title:"MetadataChangeProposal & MetadataChangeLog Events",description:"Overview & Vision",source:"@site/genDocs/docs/advanced/mcp-mcl.md",sourceDirName:"docs/advanced",slug:"/advanced/mcp-mcl",permalink:"/docs/advanced/mcp-mcl",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/advanced/mcp-mcl.md",version:"current",frontMatter:{title:"MetadataChangeProposal & MetadataChangeLog Events",sidebar_label:"MetadataChangeProposal & MetadataChangeLog Events",slug:"/advanced/mcp-mcl",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/advanced/mcp-mcl.md"},sidebar:"overviewSidebar",previous:{title:"Migrate Graph Service Implementation to Elasticsearch",permalink:"/docs/how/migrating-graph-service-implementation"},next:{title:"SchemaFieldPath Specification (Version 2)",permalink:"/docs/advanced/field-path-spec-v2"}},c=[{value:"Overview &amp; Vision",id:"overview--vision",children:[]},{value:"Modeling",id:"modeling",children:[]},{value:"Topics",id:"topics",children:[]},{value:"Configuration",id:"configuration",children:[]}],d={toc:c};function h(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"metadatachangeproposal--metadatachangelog-events"},"MetadataChangeProposal & MetadataChangeLog Events"),(0,i.kt)("h2",{id:"overview--vision"},"Overview & Vision"),(0,i.kt)("p",null,"As of release v0.8.7, two new important event streams have been introduced: MetadataChangeProposal & MetadataChangeLog. These topics serve as a more generic (and more appropriately named) versions of the classic MetadataChangeEvent and MetadataAuditEvent events, used for a) proposing and b) logging changes to the DataHub Metadata Graph."),(0,i.kt)("p",null,"With these events, we move towards a more generic world, in which Metadata models are not strongly-typed parts of the event schemas themselves. This provides flexibility, allowing for the core models comprising the Metadata Graph to be added and changed dynamically, without requiring structural updates to Kafka or REST API schemas used for ingesting and serving Metadata."),(0,i.kt)("p",null,"Moreover, we've focused in on the \"aspect\" as the atomic unit of write in DataHub. MetadataChangeProposal & MetadataChangeLog with carry only a single aspect in their payload, as opposed to the list of aspects carried by today's MCE & MAE. This more accurately reflects the atomicity contract of the metadata model, hopefully lessening confusion about transactional guarantees for multi-aspect writes in addition to making it simpler to tune into the metadata changes a consumer cares about."),(0,i.kt)("p",null,"Making these events more generic does not come for free; we give up some in the form of Restli and Kafka-native schema validation and defer this responsibility to DataHub itself, who is the sole enforcer of the graph model contracts. Additionally, we add an extra step to unbundling the actual metadata by requiring a double-deserialization: that of the event / response body itself and another of the nested Metadata aspect."),(0,i.kt)("p",null,'To mitigate these downsides, we are committed to providing cross-language client libraries capable of doing the hard work for you. We intend to publish these as strongly-typed artifacts generated from the "default" model set DataHub ships with. This stands in addition to an initiative to introduce an OpenAPI layer in DataHub\'s backend (gms) which would provide a strongly typed model.'),(0,i.kt)("p",null,"Ultimately, we intend to realize a state in which the Entities and Aspect schemas can be altered without requiring generated code and without maintaining a single mega-model schema (looking at you, Snapshot.pdl). The intention is that changes to the metadata model become even easier than they are today."),(0,i.kt)("h2",{id:"modeling"},"Modeling"),(0,i.kt)("p",null,"A Metadata Change Proposal is defined (in PDL) as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"record MetadataChangeProposal {\n\n  /**\n   * Kafka audit header. See go/kafkaauditheader for more info.\n   */\n  auditHeader: optional KafkaAuditHeader\n\n  /**\n   * Type of the entity being written to\n   */\n  entityType: string\n\n  /**\n   * Urn of the entity being written\n   **/\n  entityUrn: optional Urn,\n\n  /**\n   * Key aspect of the entity being written\n   */\n  entityKeyAspect: optional GenericAspect\n    \n  /**\n   * Type of change being proposed\n   */\n  changeType: ChangeType\n\n  /**\n   * Aspect of the entity being written to\n   * Not filling this out implies that the writer wants to affect the entire entity\n   * Note: This is only valid for CREATE and DELETE operations.\n   **/\n  aspectName: optional string\n\n  aspect: optional GenericAspect\n\n  /**\n   * A string->string map of custom properties that one might want to attach to an event\n   **/\n  systemMetadata: optional SystemMetadata\n\n}\n")),(0,i.kt)("p",null,"Each proposal comprises of the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"entityType"),(0,i.kt)("p",{parentName:"li"},"Refers to the type of the entity e.g. dataset, chart")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"entityUrn"),(0,i.kt)("p",{parentName:"li"},"Urn of the entity being updated. Note, ",(0,i.kt)("strong",{parentName:"p"},"exactly one")," of entityUrn or entityKeyAspect must be filled out to correctly identify an entity.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"entityKeyAspect"),(0,i.kt)("p",{parentName:"li"},"Key aspect of the entity. Instead of having a string URN, we will support identifying entities by their key aspect structs. Note, this is not supported as of now.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"changeType"),(0,i.kt)("p",{parentName:"li"},"Type of change you are proposing: one of"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"UPSERT: Insert if not exists, update otherwise"),(0,i.kt)("li",{parentName:"ul"},"CREATE: Insert if not exists, fail otherwise"),(0,i.kt)("li",{parentName:"ul"},"UPDATE: Update if exists, fail otherwise"),(0,i.kt)("li",{parentName:"ul"},"DELETE: Delete"),(0,i.kt)("li",{parentName:"ul"},"PATCH: Patch the aspect instead of doing a full replace")),(0,i.kt)("p",{parentName:"li"},"Only UPSERT is supported as of now.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"aspectName"),(0,i.kt)("p",{parentName:"li"},'Name of the aspect. Must match the name in the "@Aspect" annotation.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"aspect"),(0,i.kt)("p",{parentName:"li"},"To support strongly typed aspects, without having to keep track of a union of all existing aspects, we introduced a new object called GenericAspect."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"record GenericAspect {\n    value: bytes\n    contentType: string\n}\n")),(0,i.kt)("p",{parentName:"li"},'It contains the type of serialization and the serialized value. Note, currently we only support "application/json" as contentType but will be adding more forms of serialization in the future. Validation of the serialized object happens in GMS against the schema matching the aspectName.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"systemMetadata"),(0,i.kt)("p",{parentName:"li"},"Extra metadata about the proposal like run_id or updated timestamp."))),(0,i.kt)("p",null,"GMS processes the proposal and produces the Metadata Change Log, which looks like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"record MetadataChangeLog includes MetadataChangeProposal {\n\n  previousAspectValue: optional GenericAspect\n\n  previousSystemMetadata: optional SystemMetadata\n\n}\n")),(0,i.kt)("p",null,"It includes all fields in the proposal, but also has the previous version of the aspect value and system metadata. This allows the MCL processor to know the previous value before deciding to update all indices."),(0,i.kt)("h2",{id:"topics"},"Topics"),(0,i.kt)("p",null,"Following the change in our event models, we introduced 4 new topics. The old topics will get deprecated as we fully migrate to this model."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"MetadataChangeProposal_v1, FailedMetadataChangeProposal_v1")),(0,i.kt)("p",{parentName:"li"},"Analogous to the MCE topic, proposals that get produced into the MetadataChangeProposal_v1 topic, will get ingested to GMS asynchronously, and any failed ingestion will produce a failed MCP in the FailedMetadataChangeProposal_v1 topic."))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"MetadataChangeLog_Versioned_v1")),(0,i.kt)("p",{parentName:"li"},"Analogous to the MAE topic, MCLs for versioned aspects will get produced into this topic. Since versioned aspects have a source of truth that can be separately backed up, the retention of this topic is short (by default 7 days). Note both this and the next topic are consumed by the same MCL processor."))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"MetadataChangeLog_Timeseries_v1")),(0,i.kt)("p",{parentName:"li"},"Analogous to the MAE topics, MCLs for timeseries aspects will get produced into this topic. Since timeseries aspects do not have a source of truth, but rather gets ingested straight to elasticsearch, we set the retention of this topic to be longer (90 days). You can backup timeseries aspect by replaying this topic."))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"With MetadataChangeProposal and MetadataChangeLog, we will introduce a new mechanism for configuring the association between Metadata Entities & Aspects. Specifically, the Snapshot.pdl model will no longer encode this information by way of ",(0,i.kt)("a",{parentName:"p",href:"http://rest.li"},"Rest.li")," union. Instead, a more explicit yaml file will provide these links. This file will be leveraged at runtime to construct the in-memory Entity Registry which contains the global Metadata schema along with some additional metadata."),(0,i.kt)("p",null,'An example of the configuration file that will be used for MCP & MCL, which defines a "dataset" entity that is associated with to two aspects: "datasetKey" and "datasetProfile".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# entity-registry.yml\n\nentities:\n  - name: dataset\n    keyAspect: datasetKey\n    aspects:\n      - datasetProfile\n")))}h.isMDXComponent=!0}}]);