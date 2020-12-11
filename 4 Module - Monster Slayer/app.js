Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      winner: null,
      logMessages: [],
      roundCount: 1,
    };
  },

  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },

    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },

    attackButtonToggler() {
      return this.roundCount % 3 !== 0;
    },
  },

  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },

    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },

    logMessages(value) {
      console.table(value);
    },
  },

  methods: {
    getRndValBetween(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },

    monsterAttack() {
      let monsterDamage = this.getRndValBetween(8, 15);
      this.addLogMessage("Monster", "attack", monsterDamage);
      this.playerHealth -= monsterDamage;
    },

    playerAttack() {
      this.roundCount++;
      const playerDamage = this.getRndValBetween(5, 12);
      this.addLogMessage("Player", "attack", playerDamage);
      this.monsterHealth -= playerDamage;
      this.monsterAttack();
    },

    speciaAttack() {
      this.roundCount++;
      const speciaAtack = this.getRndValBetween(10, 25);
      this.addLogMessage("Player", "specialAttack", speciaAtack);
      this.monsterHealth -= speciaAtack;
      this.monsterAttack();
    },

    healPlayer() {
      this.roundCount++;
      const healValue = this.getRndValBetween(5, 20);
      this.addLogMessage("Player", "heal", healValue);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.monsterAttack();
    },

    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        value,
      });
    },

    surrender() {
      this.winner = "monster";
    },

    resetData() {
      this.isStarted = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.logMessages = [];
      this.winner = null;
    },
  },
}).mount("#game");
