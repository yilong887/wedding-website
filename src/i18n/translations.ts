export type Language = "en" | "zh";

/**
 * All user-facing copy lives here. Add a key to both objects, then read it
 * with the `t()` helper from useLanguage(). Keys are dot-namespaced by page.
 */
export const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.timelines": "Timelines",
    "nav.saveTheDate": "Save the Date",
    "nav.invitation": "Invitation",
    "nav.rsvp": "RSVP",
    "nav.gifts": "Gifts",

    // RSVP form
    "rsvp.title": "RSVP",
    "rsvp.deadline": "Kindly reply by August 25, 2026",
    "rsvp.intro":
      "We'd love to know if you can join us. Please fill in a line for each person in your party.",
    "rsvp.yourName": "Your name",
    "rsvp.email": "Email",
    "rsvp.emailHelp": "We'll send your confirmation here.",
    "rsvp.phone": "Phone",
    "rsvp.attending": "Will you be joining us?",
    "rsvp.attendingYes": "Joyfully accepts",
    "rsvp.attendingNo": "Regretfully declines",
    "rsvp.guestCount": "Number of guests",
    "rsvp.guestName": "Guest name",
    "rsvp.guestAge": "Age",
    "rsvp.meal": "Meal preference",
    "rsvp.allergies": "Allergies or dietary needs",
    "rsvp.drink": "Drink preference",
    "rsvp.submit": "Send RSVP",
    "rsvp.submitting": "Sending…",
    "rsvp.errorRequired": "This field is required",
    "rsvp.errorEmail": "Please enter a valid email address",
    "rsvp.errorPhone": "Please enter a valid phone number",

    // Confirmation page
    "confirm.eyebrow": "RSVP received",
    "confirm.headingYes": "Thank you — we have you down",
    "confirm.headingNo": "Thank you for letting us know",
    "confirm.bodyYes":
      "Your reply is in, and we're so glad you're coming. A confirmation is on its way to your inbox with everything you just told us. We'll send the full day-of schedule closer to October.",
    "confirm.bodyNo":
      "We'll miss you on the day, but thank you for taking the time to reply. A confirmation is on its way to your inbox.",
    "confirm.spamNote":
      "If it hasn't arrived in a few minutes, have a look in your spam folder.",
    "confirm.editNote":
      "Need to change something? Just reply to that email and we'll sort it out.",

    // Gifts section on confirmation page
    "confirm.giftsHeading": "One more thing, only if you're curious",
    "confirm.giftsBody":
      "A few people have asked, so we've written it down in one place: we're saving for a honeymoon, and that's where anything kind would go. Truly no obligation — having you there is the whole point of the day.",
    "confirm.giftsButton": "Read our note on gifts",

    "confirm.backHome": "Back to home",
    "confirm.viewSchedule": "View the timeline",

    // Language toggle
    "lang.label": "Language",
    "lang.en": "English",
    "lang.zh": "中文",
  },

  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.timelines": "婚礼流程",
    "nav.saveTheDate": "预留日期",
    "nav.invitation": "请柬",
    "nav.rsvp": "回复邀请",
    "nav.gifts": "礼物",

    // RSVP form
    "rsvp.title": "回复邀请",
    "rsvp.deadline": "请于 2026 年 8 月 25 日前回复",
    "rsvp.intro": "很想知道您能否出席。请为同行的每一位填写一行信息。",
    "rsvp.yourName": "您的姓名",
    "rsvp.email": "电子邮箱",
    "rsvp.emailHelp": "确认邮件将发送至此邮箱。",
    "rsvp.phone": "联系电话",
    "rsvp.attending": "您能出席吗？",
    "rsvp.attendingYes": "欣然出席",
    "rsvp.attendingNo": "遗憾无法出席",
    "rsvp.guestCount": "出席人数",
    "rsvp.guestName": "宾客姓名",
    "rsvp.guestAge": "年龄",
    "rsvp.meal": "餐食选择",
    "rsvp.allergies": "过敏或饮食需求",
    "rsvp.drink": "饮品偏好",
    "rsvp.submit": "提交回复",
    "rsvp.submitting": "提交中…",
    "rsvp.errorRequired": "此项为必填",
    "rsvp.errorEmail": "请输入有效的电子邮箱",
    "rsvp.errorPhone": "请输入有效的电话号码",

    // Confirmation page
    "confirm.eyebrow": "已收到回复",
    "confirm.headingYes": "谢谢您 —— 我们已记录",
    "confirm.headingNo": "感谢您的告知",
    "confirm.bodyYes":
      "您的回复已收到，很高兴您能来。确认邮件正在发往您的邮箱，其中包含您刚刚填写的全部信息。临近十月，我们会再发送当天的详细流程。",
    "confirm.bodyNo":
      "当天见不到您我们会很想念，但仍然感谢您抽空回复。确认邮件正在发往您的邮箱。",
    "confirm.spamNote": "若几分钟后仍未收到，请查看垃圾邮件文件夹。",
    "confirm.editNote": "需要修改信息？直接回复那封邮件，我们会为您更新。",

    // Gifts section on confirmation page
    "confirm.giftsHeading": "还有一件小事，随意看看就好",
    "confirm.giftsBody":
      "有几位朋友问起，所以我们把它写在了一处：我们正在为蜜月做准备，心意都会用在那里。真的不必挂心 —— 您能到场，就是这一天最重要的事。",
    "confirm.giftsButton": "查看关于礼物的说明",

    "confirm.backHome": "返回首页",
    "confirm.viewSchedule": "查看婚礼流程",

    // Language toggle
    "lang.label": "语言",
    "lang.en": "English",
    "lang.zh": "中文",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];
