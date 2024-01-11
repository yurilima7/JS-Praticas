const subjectGrade1 = 9;
const subjectGrade2 = 7;
const subjectGrade3 = 8.5;

const averageGrade = (subjectGrade1 + subjectGrade2 + subjectGrade3) / 3;

if (averageGrade >= 7) {
    console.log('Aprovado com média:', averageGrade.toFixed(2));
} else if (averageGrade >= 5 && averageGrade < 7) {
    console.log('Recuperação com média:', averageGrade.toFixed(2));
} else {
    console.log('Reprovado com média:', averageGrade.toFixed(2));
}