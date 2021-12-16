'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('application_informations', [
      {
        plan_id: 0,
        plan_name: 'Basic',
        plan_price: '0.00',
        is_plan_active:true,
        account_count: '2',
        member_count: '1',
        available_network: '1-4-5-6-11-12',
        browser_extension: true,
        scheduling_posting: true,
        mobile_apps: false,
        support_24_7: false,
        crm: false,
        calendar: false,
        rss_feeds: false,
        social_report: false,
        discovery: false,
        twitter_engagement: false,
        link_shortening: false,
        shareathon: false,
        content_studio: false,
        team_report: false,
        board_me: false,
        share_library: false,
        custom_report: false,
        maximum_schedule :5
      },
      {
        plan_id: 1,
        plan_name: 'Standard',
        plan_price: '4.99',
        is_plan_active:true,
        account_count: '10',
        member_count: '5',
        available_network: '1-4-5-6-11-12',
        browser_extension: true,
        scheduling_posting: true,
        mobile_apps: true,
        support_24_7: true,
        crm: true,
        calendar: true,
        rss_feeds: false,
        social_report: false,
        discovery: false,
        twitter_engagement: false,
        link_shortening: false,
        shareathon: false,
        content_studio: false,
        team_report: false,
        board_me: false,
        share_library: false,
        custom_report: false,
        maximum_schedule :10
      },
      {
        plan_id: 2,
        plan_name: 'Premium',
        plan_price: '9.99',
        is_plan_active:true,
        account_count: '20',
        member_count: '10',
        available_network: '1-4-5-6-11-12',
        browser_extension: true,
        scheduling_posting: true,
        mobile_apps: true,
        support_24_7: true,
        crm: true,
        calendar: true,
        rss_feeds: true,
        social_report: true,
        discovery: false,
        twitter_engagement: false,
        link_shortening: false,
        shareathon: false,
        content_studio: false,
        team_report: false,
        board_me: false,
        share_library: false,
        custom_report: false,
        maximum_schedule :20
      },
      {
        plan_id: 3,
        plan_name: 'Deluxe',
        plan_price: '19.99',
        is_plan_active:true,
        account_count: '50',
        member_count: '20',
        available_network: '1-4-5-6-9-10-11-12',
        browser_extension: true,
        scheduling_posting: true,
        mobile_apps: true,
        support_24_7: true,
        crm: true,
        calendar: true,
        rss_feeds: true,
        social_report: true,
        discovery: true,
        twitter_engagement: false,
        link_shortening: false,
        shareathon: false,
        content_studio: false,
        team_report: false,
        board_me: false,
        share_library: false,
        custom_report: false,
        maximum_schedule :50
      },
      {
        plan_id: 4,
        plan_name: 'Topaz',
        plan_price: '29.99',
        is_plan_active:true,
        account_count: '100',
        member_count: '30',
        available_network: '1-4-5-6-9-10-11-12',
        browser_extension: true,
        scheduling_posting: true,
        mobile_apps: true,
        support_24_7: true,
        crm: true,
        calendar: true,
        rss_feeds: true,
        social_report: true,
        discovery: true,
        twitter_engagement: true,
        link_shortening: true,
        shareathon: false,
        content_studio: false,
        team_report: false,
        board_me: false,
        share_library: false,
        custom_report: false,
        maximum_schedule :80
      },
      {
        plan_id: 5,
        plan_name: 'Ruby',
        plan_price: '49.99',
        is_plan_active:true,
        account_count: '200',
        member_count: '50',
        available_network: '1-4-5-6-9-10-11-12',
        browser_extension: true,
        scheduling_posting: true,
        mobile_apps: true,
        support_24_7: true,
        crm: true,
        calendar: true,
        rss_feeds: true,
        social_report: true,
        discovery: true,
        twitter_engagement: true,
        link_shortening: true,
        shareathon: true,
        content_studio: true,
        team_report: false,
        board_me: false,
        share_library: false,
        custom_report: false,
        maximum_schedule :200
      },
      {
        plan_id: 6,
        plan_name: 'Gold',
        plan_price: '79.99',
        is_plan_active:true,
        account_count: '500',
        member_count: '80',
        available_network: '1-4-5-6-9-10-11-12',
        browser_extension: true,
        scheduling_posting: true,
        mobile_apps: true,
        support_24_7: true,
        crm: true,
        calendar: true,
        rss_feeds: true,
        social_report: true,
        discovery: true,
        twitter_engagement: true,
        link_shortening: true,
        shareathon: true,
        content_studio: true,
        team_report: true,
        board_me: true,
        share_library: true,
        custom_report: false,
        maximum_schedule :300
      },
      {
        plan_id: 7,
        plan_name: 'Platinum',
        plan_price: '99.99',
        is_plan_active:true,
        account_count: '1000',
        member_count: '100',
        available_network: '1-4-5-6-9-10-11-12',
        browser_extension: true,
        scheduling_posting: true,
        mobile_apps: true,
        support_24_7: true,
        crm: true,
        calendar: true,
        rss_feeds: true,
        social_report: true,
        discovery: true,
        twitter_engagement: true,
        link_shortening: true,
        shareathon: true,
        content_studio: true,
        team_report: true,
        board_me: true,
        share_library: true,
        custom_report: true,
        maximum_schedule :500
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('application_informations', null, {});
  }
};
