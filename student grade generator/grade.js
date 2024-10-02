//generating grades based to marks scored
function generateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60) {
        return 'B';
    } else if (mark >= 50) {
        return 'C';
    } else if (mark >= 40) {
        return 'D';
    } else {
        return 'E';
    }

    
}
//calculation of average marks
function calculateAverage(marks) {
    const sum = calculateMarks(marks);
    return sum / marks.length;

}

//calculation of marks
function calculateMarks(marks) {
    return marks.reduce((acc, curr) => acc + curr, 0);
    
}

//marks submission
function submit() {
    const maths = parseInt(document.getElementById('maths').value) || 0;
    const english = parseInt(document.getElementById('english').value) || 0;
    const physics = parseInt(document.getElementById('physics').value) || 0;
    const chemistry = parseInt(document.getElementById('chemistry').value) || 0;
    const biology = parseInt(document.getElementById('biology').value) || 0;

    // Validation for marks range
    const marks = [maths, english, physics, chemistry, biology];
    for (const mark of marks) {
        if (mark < 0 || mark > 100 || isNaN(mark)) {
            alert('Invalid number, marks should be between 0 and 100.');
            return; // Stop further processing
        }
    }

    const sum = calculateMarks(marks);
    const average = calculateAverage(marks);

    // Generating grade based on average mark
    const grade = generateGrade(average);

    document.getElementById('points').textContent = average.toFixed(2);
    document.getElementById('grade').textContent = grade;
    document.getElementById('sum').textContent = sum;
}

