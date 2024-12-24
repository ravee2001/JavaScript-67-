const finalParticipants = ["Taylor", "Donald", "Don", "Natasha", "Bobby"]; //

const announcements = finalParticipants.map((member) => { //จะเอาชื่อแต่ละคนมาเพิ่มคำต่อท้าย " joined the contest."
    return member + " joined the contest.";
});

console.log(announcements);