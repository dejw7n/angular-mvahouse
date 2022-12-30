var datesPickerJs = (function () {
	return {
		init: function () {
			const dateStart = new Date();
			dateStartString = dateStart.getMonth() + 1 + "-" + dateStart.getDate() + "-" + dateStart.getFullYear();
			$('input[id="dates-picker"]').daterangepicker(
				{
					autoUpdateInput: false,
					autoApply: true,
					locale: {
						format: "MM/DD/YYYY",
						separator: " - ",
						applyLabel: "Apply",
						cancelLabel: "Cancel",
						fromLabel: "From",
						toLabel: "To",
						customRangeLabel: "Custom",
						weekLabel: "W",
						daysOfWeek: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
						monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
						firstDay: 1,
					},
					alwaysShowCalendars: false,
					linkedCalendars: true,
					startDate: dateStartString,
					endDate: null,
					minDate: dateStartString,
					drops: "auto",
				},
				function (start, end, label) {
					if (start._isValid) {
						document.querySelector("input#dates-picker-checkin").setAttribute("dates-picker-checkin", start.format("MM/DD/YYYY"));
						document.querySelector("div#dates-picker-checkin-display").innerHTML = start.format("DD/MM/YYYY");
					}
					if (end._isValid) {
						document.querySelector("input#dates-picker-checkout").setAttribute("dates-picker-checkout", end.format("MM/DD/YYYY"));
						document.querySelector("div#dates-picker-checkout-display").innerHTML = end.format("DD/MM/YYYY");
					}
					console.log("New date range selected: " + start.format("YYYY-MM-DD") + " to " + end.format("YYYY-MM-DD") + " (predefined range: " + label + ")");
				}
			);
		},
	};
})(datesPickerJs || {});
