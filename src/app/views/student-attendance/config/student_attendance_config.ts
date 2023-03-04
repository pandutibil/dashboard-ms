export const config = {
    // sac_average_attendance_compliance: {
    //     "label": "Student Attendance Compliance",
    //     "defaultLevel": "state",
    //     "filters": [
    //         {
    //             "name": "State",
    //             "labelProp": "state_name",
    //             "valueProp": "state_id",
    //             "hierarchyLevel": "1",
    //             "timeSeriesQueries": {
    //                 "table": "select district_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id left join ingestion.dimension_district as d on t.district_id = d.district_id where (date between startDate and endDate) and m.state_id={state_id} group by t.district_id ,district_name",
    //                 "bigNumber": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}",
    //                 // "bigNumberComparison": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "table": "select min(date) as min_date, max(date) as max_date, district_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id left join ingestion.dimension_district as d on t.district_id = d.district_id where m.state_id = {state_id} group by t.district_id ,district_name",
    //                     "bigNumber": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where m.state_id = {state_id}",
    //                     // "bigNumberComparison": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
    //                 },
    //                 "level": "district"
    //             }
    //         },
    //         {
    //             "name": "District",
    //             "labelProp": "district_name",
    //             "valueProp": "district_id",
    //             "hierarchyLevel": "2",
    //             "timeSeriesQueries": {
    //                 "table": "select block_name, district_name as di, round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id} group by t.block_id,block_name,district_name",
    //                 "bigNumber": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id}",
    //                 // "bigNumberComparison": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id}"
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "table": "select min(date) as min_date, max(date) as max_date, block_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where m.district_id={district_id} group by t.block_id,block_name,district_name",
    //                     "bigNumber": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where m.district_id={district_id}",
    //                     // "bigNumberComparison": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id}"
    //                 },
    //                 "level": "block"
    //             }
    //         },
    //         {
    //             "name": "Block",
    //             "labelProp": "block_name",
    //             "valueProp": "block_id",
    //             "hierarchyLevel": "3",
    //             "timeSeriesQueries": {
    //                 "table": "select cluster_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_block as b on m.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.block_id={block_id} group by t.cluster_id,cluster_name,block_name,district_name",
    //                 "bigNumber": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id}",
    //                 // "bigNumberComparison": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id}"
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "table": "select min(date) as min_date, max(date) as max_date, cluster_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_block as b on m.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where m.block_id={block_id} group by t.cluster_id,cluster_name,block_name,district_name",
    //                     "bigNumber": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where m.block_id={block_id}",
    //                     // "bigNumberComparison": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id}"
    //                 },
    //                 "level": "cluster"
    //             }
    //         },
    //         {
    //             "name": "Cluster",
    //             "labelProp": "cluster_name",
    //             "valueProp": "cluster_id",
    //             "hierarchyLevel": "4",
    //             "timeSeriesQueries": {
    //                 "table": "select school_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on c.cluster_id = m.cluster_id left join ingestion.dimension_school as s on s.school_id = t.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id} group by school_name,cluster_name,block_name,district_name",
    //                 "bigNumber": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id}",
    //                 // "bigNumberComparison": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id}",
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "table": "select min(date) as min_date, max(date) as max_date, school_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on c.cluster_id = m.cluster_id left join ingestion.dimension_school as s on s.school_id = t.school_id where m.cluster_id={cluster_id} group by school_name,cluster_name,block_name,district_name",
    //                     "bigNumber": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where m.cluster_id={cluster_id}",
    //                     // "bigNumberComparison": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id}",
    //                 },
    //                 "level": "school"
    //             }
    //         },
    //         {
    //             "name": "School",
    //             "labelProp": "school_name",
    //             "valueProp": "school_id",
    //             "hierarchyLevel": "5",
    //             "timeSeriesQueries": {
    //                 "table": "select grade,  round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on c.cluster_id = m.cluster_id left join ingestion.dimension_school as s on s.school_id = t.school_id where (date between startDate and endDate) and t.school_id={school_id} group by grade,school_name,cluster_name,block_name,district_name",
    //                 "bigNumber": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_school as t where (date between startDate and endDate) and t.school_id={school_id}",
    //                 // "bigNumberComparison": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_school as t where (date between startDate and endDate) and t.school_id={school_id}",
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "table": "select min(date) as min_date, max(date) as max_date, grade, school_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on c.cluster_id = m.cluster_id left join ingestion.dimension_school as s on s.school_id = t.school_id where m.school_id={school_id} group by grade,school_name,cluster_name,block_name,district_name",
    //                     "bigNumber": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_school as t where t.school_id={school_id}",
    //                     // "bigNumberComparison": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_school as t where (date between startDate and endDate) and t.school_id={school_id}",
    //                 },
    //                 "level": "school"
    //             }
    //         }
    //     ],
    //     "options": {
    //         "table": {
    //             "columns": [
    //                 {
    //                     name: "State",
    //                     property: "state_name",
    //                     class: "text-center"
    //                 },
    //                 {
    //                     name: "District",
    //                     property: "district_name",
    //                     class: "text-center"
    //                 },
    //                 {
    //                     name: "Block",
    //                     property: "block_name",
    //                     class: "text-center"
    //                 },
    //                 {
    //                     name: "Cluster",
    //                     property: "cluster_name",
    //                     class: "text-center"
    //                 },
    //                 {
    //                     name: "School",
    //                     property: "school_name",
    //                     class: "text-center"
    //                 },
    //                 {
    //                     name: "Grade",
    //                     property: "grade",
    //                     class: "text-center"
    //                 },
    //                 {
    //                     name: "Student Attendance Compliance",
    //                     property: "percentage",
    //                     class: "text-center",
    //                     isHeatMapRequired: true,
    //                     color: {
    //                         type: "percentage",
    //                         values: [
    //                             {
    //                                 color: "#D6FFD6",
    //                                 breakPoint: 75
    //                             },
    //                             {
    //                                 color: "#FFFBD6",
    //                                 breakPoint: 50
    //                             },
    //                             {
    //                                 color: "#FFD6D6",
    //                                 breakPoint: 0
    //                             }
    //                         ]
    //                     },
    //                 }
    //             ],
    //             "sortByProperty": "state_name",
    //             "sortDirection": "desc"
    //         },
    //         "bigNumber": {
    //             "valueSuffix": '%'
    //         }
    //     }
    // },
    // sac_attendance_compliance_rank: {
    //     "label": "Student Attendance Compliance",
    //     "defaultLevel": "district",
    //     "filters": [
    //         {
    //             "name": "District",
    //             "labelProp": "district_name",
    //             "valueProp": "district_id",
    //             "hierarchyLevel": "2",
    //             "timeSeriesQueries": {
    //                 "table": "select district_name, dense_rank() over(order by avg(percentage) desc) as rank,round(percentage ,0) as percentage from ingestion.sac_stds_atd_cmp_by_district as t left join ingestion.dimension_district as d on t.district_id = d.district_id left join (select distinct(district_id), state_id from ingestion.dimension_master) as m on m.district_id = t.district_id where (date between startDate and endDate) and state_id = {state_id} group by t.district_id, district_name,t.percentage",
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "table": "select district_name, dense_rank() over(order by avg(percentage) desc) as rank ,round(percentage ,0) as percentage from ingestion.sac_stds_atd_cmp_by_district as t left join ingestion.dimension_district as d on t.district_id = d.district_id left join (select distinct(district_id), state_id from ingestion.dimension_master) as m on m.district_id = t.district_id where state_id = {state_id} group by t.district_id, district_name,t.percentage",
    //                 },
    //                 "level": "block"
    //             }
    //         },
    //         {
    //             "name": "Block",
    //             "labelProp": "block_name",
    //             "valueProp": "block_id",
    //             "hierarchyLevel": "3",
    //             "timeSeriesQueries": {
    //                 "table": "select block_name, dense_rank() over(order by avg(percentage) desc) as rank ,round(percentage ,0)  as percentage from ingestion.sac_stds_atd_cmp_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join (select distinct(block_id), district_id from ingestion.dimension_master) as m on m.block_id = t.block_id where district_id = {district_id} and (date between startDate and endDate) group by t.block_id, block_name,t.percentage",
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "table": "select block_name, dense_rank() over(order by avg(percentage) desc) as rank , round(percentage ,0) as percentage from ingestion.sac_stds_atd_cmp_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join (select distinct(block_id), district_id from ingestion.dimension_master) as m on m.block_id = t.block_id where district_id = {district_id} group by t.block_id, block_name,t.percentage",
    //                 },
    //                 "level": "cluster"
    //             }
    //         },
    //         {
    //             "name": "Cluster",
    //             "labelProp": "cluster_name",
    //             "valueProp": "cluster_id",
    //             "hierarchyLevel": "4",
    //             "timeSeriesQueries": {
    //                 "table": "select cluster_name, dense_rank() over(order by avg(percentage) desc) as rank, round(percentage ,0) as percentage from ingestion.sac_stds_atd_cmp_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join (select distinct(cluster_id), block_id from ingestion.dimension_master) as m on m.cluster_id = t.cluster_id where (date between startDate and endDate) and block_id = {block_id} group by t.cluster_id, cluster_name,t.percentage",
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "table": "select cluster_name, dense_rank() over(order by avg(percentage) desc) as rank ,round(percentage ,0) as percentage from ingestion.sac_stds_atd_cmp_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join (select distinct(cluster_id), block_id from ingestion.dimension_master) as m on m.cluster_id = t.cluster_id where block_id = {block_id} group by t.cluster_id, cluster_name,t.percentage",
    //                 },
    //                 "level": "school"
    //             }
    //         },
    //         {
    //             "name": "School",
    //             "labelProp": "school_name",
    //             "valueProp": "school_id",
    //             "hierarchyLevel": "5",
    //             "timeSeriesQueries": {
    //                 "table": "select school_name, dense_rank() over(order by avg(percentage) desc) as rank ,round(percentage ,0) as percentage from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join (select distinct(school_id), cluster_id from ingestion.dimension_master) as m on m.school_id = t.school_id where (date between startDate and endDate) and cluster_id = {cluster_id} group by t.school_id, school_name,t.percentage",
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "table": "select school_name, dense_rank() over(order by avg(percentage) desc) as rank, round(percentage ,0) as percentage from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join (select distinct(school_id), cluster_id from ingestion.dimension_master) as m on m.school_id = t.school_id where cluster_id = {cluster_id} group by t.school_id, school_name,t.percentage",
    //                 },
    //                 "level": "class"
    //             }
    //         }
    //     ],
    //     "options": {
    //         "table": {
    //             "columns": [
    //                 {
    //                     name: "State",
    //                     property: "state_name",
    //                     class: "text-center"
    //                 },
    //                 {
    //                     name: "District",
    //                     property: "district_name",
    //                     class: "text-center"
    //                 },
    //                 {
    //                     name: "Block",
    //                     property: "block_name",
    //                     class: "text-center"
    //                 },
    //                 {
    //                     name: "Cluster",
    //                     property: "cluster_name",
    //                     class: "text-center"
    //                 },
    //                 {
    //                     name: "School",
    //                     property: "school_name",
    //                     class: "text-center"
    //                 },
    //                 {
    //                     name: "Grade",
    //                     property: "grade",
    //                     class: "text-center"
    //                 },   
    //                 {
    //                     name: "Student Attendance Compliance",
    //                     property: "percentage",
    //                     class: "text-center",
    //                     isHeatMapRequired: true,
    //                     color: {
    //                         type: "percentage",
    //                         values: [
    //                             {
    //                                 color: "#D6FFD6",
    //                                 breakPoint: 75
    //                             },
    //                             {
    //                                 color: "#FFFBD6",
    //                                 breakPoint: 50
    //                             },
    //                             {
    //                                 color: "#FFD6D6",
    //                                 breakPoint: 0
    //                             }
    //                         ]
    //                     },
    //                 },
    //                 {
    //                     name: "Rank in Attendance Compliance",
    //                     property: "rank",
    //                     class: "text-center",
    //                     isHeatMapRequired: true,
    //                     color: '#fff'
    //                 },
                 
    //             ],
    //         }
    //     }
    // },
    sas_average_attendance: {
        "label": "Student Attendance Summary",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": "select district_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id left join ingestion.dimension_district as d on t.district_id = d.district_id where (date between startDate and endDate) and m.state_id={state_id} group by t.district_id ,district_name",
                },
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, district_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id left join ingestion.dimension_district as d on t.district_id = d.district_id where m.state_id = {state_id} group by t.district_id ,district_name",
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "table": "select block_name, ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from (select present_table.block_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.school_attendance_studentspresent_daily_block_id as present_table join datasets.school_attendance_studentsmarked_daily_block_id as marked_table on present_table.date = marked_table.date and present_table.block_id = marked_table.block_id) as a join dimensions.block as block_wise_table on block_wise_table.block_id = a.block_id where district_id = {district_id} and a.att_date between startDate and endDate group by a.block_id, block_name",
                },
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, block_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where m.district_id={district_id} group by t.block_id,block_name,district_name",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "table": "select cluster_name, ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.cluster_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.school_attendance_studentspresent_daily_cluster_id as present_table join datasets.school_attendance_studentsmarked_daily_cluster_id as marked_table on present_table.date = marked_table.date and present_table.cluster_id = marked_table.cluster_id) as a join dimensions.cluster as cluster_wise_table on cluster_wise_table.cluster_id = a.cluster_id where block_id = {block_id} and a.att_date between startDate and endDate group by a.cluster_id, cluster_name",
                },
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, cluster_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_block as b on m.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where m.block_id={block_id} group by t.cluster_id,cluster_name,block_name,district_name",
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "table": "select school_name, ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.school_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.school_attendance_studentspresent_daily_school_id as present_table join datasets.school_attendance_studentsmarked_daily_school_id as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id) as a join dimensions.school as school_wise_table on school_wise_table.school_id = a.school_id where cluster_id = {cluster_id} and a.att_date between startDate and endDate group by a.school_id, school_name",
                },
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, school_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on c.cluster_id = m.cluster_id left join ingestion.dimension_school as s on s.school_id = t.school_id where m.cluster_id={cluster_id} group by school_name,cluster_name,block_name,district_name",
                    },
                    "level": "school"
                }
            },
            {
                "name": "School",
                "labelProp": "school_name",
                "valueProp": "school_id",
                "hierarchyLevel": "5",
                "timeSeriesQueries": {
                    "table": "select t.grade,  round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_grade as t left join ingestion.dimension_master as m on t.school_id = m.school_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on c.cluster_id = m.cluster_id left join ingestion.dimension_school as s on s.school_id = t.school_id where (date between startDate and endDate) and t.school_id={school_id} group by t.grade,school_name,cluster_name,block_name,district_name",
                },
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, t.grade, school_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_grade as t left join ingestion.dimension_master as m on t.school_id = m.school_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on c.cluster_id = m.cluster_id left join ingestion.dimension_school as s on s.school_id = t.school_id where t.school_id={school_id} group by t.grade, school_name,cluster_name,block_name,district_name",
                    },  
                    "level": "school"
                }
            },
            {
                "name": "Grade",
                "labelProp": "grade",
                "valueProp": "grade",
                "hierarchyLevel": "6",
                "timeSeriesQueries": {
                },
                "actions": {
                    "queries": {
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "State",
                        property: "state_name",
                        class: "text-center"
                    },
                    {
                        name: "District",
                        property: "district_name",
                        class: "text-center"
                    },
                    {
                        name: "Block",
                        property: "block_name",
                        class: "text-center"
                    },
                    {
                        name: "Cluster",
                        property: "cluster_name",
                        class: "text-center"
                    },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-center"
                    },
                    {
                        name: "Grade",
                        property: "grade",
                        class: "text-center"
                    },
                    {
                        name: "Student Attendance Summary",
                        property: "stt_avg",
                        class: "text-center",
                        isHeatMapRequired: true,
                        color: {
                            type: "percentage",
                            values: [
                                {
                                    color: "#D6FFD6",
                                    breakPoint: 75
                                },
                                {
                                    color: "#FFFBD6",
                                    breakPoint: 50
                                },
                                {
                                    color: "#FFD6D6",
                                    breakPoint: 0
                                }
                            ]
                        },
                    }
                ],
            },
            "bigNumber": {
                "valueSuffix": '%',
                "property": 'stt_avg'
            }
        }
    },
    sas_average_attendance_bignumber: {
        "label": "Student Attendance Summary",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "bigNumber": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where m.state_id = {state_id}",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "bigNumber": "select ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from (select present_table.block_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.school_attendance_studentspresent_daily_block_id as present_table join datasets.school_attendance_studentsmarked_daily_block_id as marked_table on present_table.date = marked_table.date and present_table.block_id = marked_table.block_id) as a join dimensions.block as block_wise_table on block_wise_table.block_id = a.block_id where district_id = {district_id} and a.att_date between startDate and endDate",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id}"
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where m.district_id={district_id}",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id}"
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "bigNumber": "select ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.cluster_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.school_attendance_studentspresent_daily_cluster_id as present_table join datasets.school_attendance_studentsmarked_daily_cluster_id as marked_table on present_table.date = marked_table.date and present_table.cluster_id = marked_table.cluster_id) as a join dimensions.cluster as cluster_wise_table on cluster_wise_table.cluster_id = a.cluster_id where block_id = {block_id} and a.att_date between startDate and endDate",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id}"
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where m.block_id={block_id}",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id}"
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "bigNumber": "select ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.school_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.school_attendance_studentspresent_daily_school_id as present_table join datasets.school_attendance_studentsmarked_daily_school_id as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id) as a join dimensions.school as school_wise_table on school_wise_table.school_id = a.school_id where cluster_id = {cluster_id} and a.att_date between startDate and endDate",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id}",
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where m.cluster_id={cluster_id}",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id}",
                    },
                    "level": "school"
                }
            },
            {
                "name": "School",
                "labelProp": "school_name",
                "valueProp": "school_id",
                "hierarchyLevel": "5",
                "timeSeriesQueries": {
                    "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t where (date between startDate and endDate) and t.school_id={school_id}",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t where (date between startDate and endDate) and t.school_id={school_id}",
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_school as t where t.school_id={school_id}",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t where (date between startDate and endDate) and t.school_id={school_id}",
                    },  
                    "level": "school"
                }
            },
            {
                "name": "Grade",
                "labelProp": "grade",
                "valueProp": "grade",
                "hierarchyLevel": "6",
                "timeSeriesQueries": {
                    "bigNumber": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_grade as t where (date between startDate and endDate) and t.grade={class_id}",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_grade as t where (date between startDate and endDate) and t.grade={class_id}",
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_grade as t where t.grade={class_id}",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_grade as t where (date between startDate and endDate) and t.grade={class_id}",
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "bigNumber": {
                "valueSuffix": '%',
                "property": 'stt_avg'
            }
        }
    },
    sas_gender_wise_average_attendance: {
        "label": "Gender Wise Average Attendance",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "barChart": "select min(date) as min_date, max(date) as max_date, t.gender as gender, round(avg(percentage),2) as percentage,  from ingestion.sac_stds_avg_atd_gender_wise_by_district as t left join ingestion.dimension_district as d on t.district_id = d.district_id left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id} group by t.gender",
                },
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date, t.gender as gender, round(avg(percentage),2) as percentage,  from ingestion.sac_stds_avg_atd_gender_wise_by_district as t left join ingestion.dimension_district as d on d.district_id = t.district_id left join ingestion.dimension_master as m on t.district_id = m.district_id where m.state_id={state_id} group by t.gender",
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "barChart": "select  round(avg(percentage),2) as percentage, t.gender as gender from ingestion.sac_stds_avg_atd_gender_wise_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_master as m on t.block_id = m.block_id where (date between startDate and endDate) and m.district_id={district_id} group by  t.gender",
                },
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date,round(avg(percentage),2) as percentage, t.gender as gender from ingestion.sac_stds_avg_atd_gender_wise_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_master as m on t.block_id = m.block_id where m.district_id={district_id} group by  t.gender",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "barChart": "select  round(avg(percentage),2) as percentage, t.gender as gender from ingestion.sac_stds_avg_atd_gender_wise_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id} group by  t.gender",
                },
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date, round(avg(percentage),2) as percentage, t.gender as gender from ingestion.sac_stds_avg_atd_gender_wise_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where m.block_id={block_id} group by  t.gender",
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "barChart": "select  round(avg(percentage),2) as percentage, t.gender as gender from ingestion.sac_stds_avg_atd_gender_wise_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id} group by  t.gender",
                },
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date, round(avg(percentage),2) as percentage, t.gender as gender from ingestion.sac_stds_avg_atd_gender_wise_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join ingestion.dimension_master as m on t.school_id = m.school_id where m.cluster_id={cluster_id} group by  t.gender",
                    },
                    "level": "school"
                }
            },
            {
                "name": "School",
                "labelProp": "school_name",
                "valueProp": "school_id",
                "hierarchyLevel": "5",
                "timeSeriesQueries": {
                    "barChart": "select t.gender as gender, round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_gender_wise_by_grade as t where (date between startDate and endDate) and t.school_id={school_id} group by  t.gender",
                },
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date, t.gender as gender, round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_gender_wise_by_grade as t where t.school_id={school_id} group by  t.gender",
                    },
                    "level": "grade"
                }
            },
            {
                "name": "Grade",
                "labelProp": "grade",
                "valueProp": "grade",
                "hierarchyLevel": "6",
                "timeSeriesQueries": {
                    "barChart": "select  round(avg(percentage),2) as percentage, t.gender as gender from ingestion.sac_stds_avg_atd_gender_wise_by_grade as t where (date between startDate and endDate) and t.grade={class_id} group by  t.gender",
                },
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date,  round(avg(percentage),2) as percentage, t.gender as gender from ingestion.sac_stds_avg_atd_gender_wise_by_grade as t where t.grade={class_id} group by  t.gender",
                    },
                    "level": "grade"
                }
            }
        ],
        "options": {
            "barChart": {
                "metricLabel": "Average Attendance",
                "metricValue": "percentage",
                "yAxis": {
                    "title": "Attendance %"
                },
                "xAxis": {
                    "title": " ",
                    "label": "gender",
                    "value": "gender",
                    
                }
            }
        }
    },
    sas_grade_wise_average_attendance: {
        "label": "Grade Wise Average Attendance",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "barChart": "select  round(avg(percentage),2) as percentage, t.school_category as school_category from ingestion.sac_stds_avg_atd_cat_wise_by_district as t left join ingestion.dimension_district as d on t.district_id = d.district_id left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id} group by  t.school_category",
                },
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date, round(avg(percentage),2) as percentage, t.school_category as school_category from ingestion.sac_stds_avg_atd_cat_wise_by_district as t left join ingestion.dimension_district as d on d.district_id = t.district_id left join ingestion.dimension_master as m on t.district_id = m.district_id where m.state_id={state_id} group by  t.school_category",
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "barChart": "select  round(avg(percentage),2) as percentage, t.school_category as school_category from ingestion.sac_stds_avg_atd_cat_wise_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_master as m on t.block_id = m.block_id where (date between startDate and endDate) and m.district_id={district_id} group by  t.school_category",
                },
                "query": "select t.district_id, district_name, t.school_category from ingestion.sac_stds_avg_atd_cat_wise_by_district as t left join ingestion.dimension_district as d on t.district_id = d.district_id left join ingestion.dimension_master as m on t.district_id = m.district_id where m.state_id={state_id} group by t.district_id,district_name",
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date,round(avg(percentage),2) as percentage, t.school_category as school_category from ingestion.sac_stds_avg_atd_cat_wise_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_master as m on t.block_id = m.block_id where m.district_id={district_id} group by  t.school_category",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "barChart": "select round(avg(percentage),2) as percentage, t.school_category as school_category from ingestion.sac_stds_avg_atd_cat_wise_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id} group by  t.school_category",
                },
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date, round(avg(percentage),2) as percentage, t.school_category as school_category from ingestion.sac_stds_avg_atd_cat_wise_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where m.block_id={block_id} group by  t.school_category",
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "barChart": "select  round(avg(percentage),2) as percentage, t.school_category as school_category from ingestion.sac_stds_avg_atd_cat_wise_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id} group by t.school_category",
                },
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date,  round(avg(percentage),2) as percentage, t.school_category as school_category from ingestion.sac_stds_avg_atd_cat_wise_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join ingestion.dimension_master as m on t.school_id = m.school_id where m.cluster_id={cluster_id} group by  t.school_category",
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "barChart": {
                // "isMultibar": true,
                "metricLabel": "Average Attendance",
                "metricValue": "percentage",
                "yAxis": {
                    "title": "Attendence %",
                },
                "xAxis": {
                    "label": "school_category",
                    "value": "school_category",
                    "title": " ",
                }
            }
        }
    },
    sas_average_attendance_rank: {
        "label": "Student Attendance Summary",
        "defaultLevel": "district",
        "filters": [
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "table": "select district_name, ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg, dense_rank() over(order by avg(a.students_present/a.students_marked) desc) as rank from  (select present_table.district_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.school_attendance_studentspresent_daily_district_id as present_table join datasets.school_attendance_studentsmarked_daily_district_id as marked_table on present_table.date = marked_table.date and present_table.district_id = marked_table.district_id) as a join dimensions.district as district_wise_table on district_wise_table.district_id = a.district_id where a.att_date between startDate and endDate group by a.district_id, district_name",
                },
                "actions": {
                    "queries": {
                        "table": "select district_name, dense_rank() over(order by avg(percentage) desc) as rank ,round(percentage ,0) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_district as d on t.district_id = d.district_id left join (select distinct(district_id), state_id from ingestion.dimension_master) as m on m.district_id = t.district_id where state_id = {state_id} group by t.district_id, district_name,t.percentage",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "table": "select block_name, ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg, dense_rank() over(order by avg(a.students_present/a.students_marked) desc) as rank from  (select present_table.block_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.school_attendance_studentspresent_daily_block_id as present_table join datasets.school_attendance_studentsmarked_daily_block_id as marked_table on present_table.date = marked_table.date and present_table.block_id = marked_table.block_id) as a join dimensions.block as block_wise_table on block_wise_table.block_id = a.block_id where a.att_date between startDate and endDate and district_id = {district_id} group by a.block_id, block_name",
                },
                "actions": {
                    "queries": {
                        "table": "select block_name, dense_rank() over(order by avg(percentage) desc) as rank ,round(percentage ,0) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join (select distinct(block_id), district_id from ingestion.dimension_master) as m on m.block_id = t.block_id where district_id = {district_id} group by t.block_id, block_name,t.percentage",
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "table": "select cluster_name, ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg, dense_rank() over(order by avg(a.students_present/a.students_marked) desc) as rank from  (select present_table.cluster_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.school_attendance_studentspresent_daily_cluster_id as present_table join datasets.school_attendance_studentsmarked_daily_cluster_id as marked_table on present_table.date = marked_table.date and present_table.cluster_id = marked_table.cluster_id) as a join dimensions.cluster as cluster_wise_table on cluster_wise_table.cluster_id = a.cluster_id where block_id = {block_id} and a.att_date between startDate and endDate group by a.cluster_id, cluster_name",
                },
                "actions": {
                    "queries": {
                        "table": "select cluster_name, dense_rank() over(order by avg(percentage) desc) as rank,round(percentage ,0) as percentage  from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join (select distinct(cluster_id), block_id from ingestion.dimension_master) as m on m.cluster_id = t.cluster_id where block_id = {block_id} group by t.cluster_id, cluster_name,t.percentage",
                    },
                    "level": "school"
                }
            },
            {
                "name": "School",
                "labelProp": "school_name",
                "valueProp": "school_id",
                "hierarchyLevel": "5",
                "timeSeriesQueries": {
                    "table": "select school_name, dense_rank() over(order by avg(percentage) desc) as rank ,round(percentage ,0) as percentage  from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join (select distinct(school_id), cluster_id from ingestion.dimension_master) as m on m.school_id = t.school_id where (date between startDate and endDate) and cluster_id = {cluster_id} group by t.school_id, school_name,t.percentage",
                },
                "actions": {
                    "queries": {
                        "table": "select school_name, dense_rank() over(order by avg(percentage) desc) as rank ,round(percentage ,0) as percentage  from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join (select distinct(school_id), cluster_id from ingestion.dimension_master) as m on m.school_id = t.school_id where cluster_id = {cluster_id} group by t.school_id, school_name,t.percentage",
                    },
                    "level": "class"
                }
            },
            {
                "name": "Grade",
                "labelProp": "grade",
                "valueProp": "grade",
                "hierarchyLevel": "6",
                "timeSeriesQueries": {
                    "table": "select t.grade, dense_rank() over(order by avg(percentage) desc) as rank ,round(percentage ,0) as percentage from ingestion.sac_stds_avg_atd_by_grade as t where (date between startDate and endDate) and school_id = {school_id} group by t.grade,t.percentage",
                },
                "actions": {
                    "queries": {
                        "table": "select t.grade, dense_rank() over(order by avg(percentage) desc) as rank ,round(percentage ,0) as percentage  from ingestion.sac_stds_avg_atd_by_grade as t where school_id = {school_id} group by t.grade,t.percentage",
                    },
                    "level": "class"
                }
            }
        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "State",
                        property: "state_name",
                        class: "text-center"
                    },
                    {
                        name: "District",
                        property: "district_name",
                        class: "text-center"
                    },
                    {
                        name: "Block",
                        property: "block_name",
                        class: "text-center"
                    },
                    {
                        name: "Cluster",
                        property: "cluster_name",
                        class: "text-center"
                    },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-center"
                    },
                    {
                        name: "Grade",
                        property: "grade",
                        class: "text-center"
                    },
                    {
                        name: "Average Student Attendance",
                        property: "stt_avg",
                        class: "text-center",
                        isHeatMapRequired: true,
                        color: {
                            type: "percentage",
                            values: [
                                {
                                    color: "#D6FFD6",
                                    breakPoint: 75
                                },
                                {
                                    color: "#FFFBD6",
                                    breakPoint: 50
                                },
                                {
                                    color: "#FFD6D6",
                                    breakPoint: 0
                                }
                            ]
                        },
                    },
                    {
                        name: "Rank in Average Attendance",
                        property: "rank",
                        class: "text-center",
                        isHeatMapRequired: true,
                        color: '#fff'
                    },
                   
                ],
            }
        }
    }
}

